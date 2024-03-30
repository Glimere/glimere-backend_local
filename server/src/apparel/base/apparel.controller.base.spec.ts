import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ApparelController } from "../apparel.controller";
import { ApparelService } from "../apparel.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  apparelDesc: "exampleApparelDesc",
  apparelName: "exampleApparelName",
  apparelPrice: 42.42,
  createdAt: new Date(),
  discountedPrice: 42.42,
  discountEndDate: new Date(),
  discountPercentage: 42.424242424,
  discountStartDate: new Date(),
  id: "exampleId",
  isDiscounted: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  apparelDesc: "exampleApparelDesc",
  apparelName: "exampleApparelName",
  apparelPrice: 42.42,
  createdAt: new Date(),
  discountedPrice: 42.42,
  discountEndDate: new Date(),
  discountPercentage: 42.424242424,
  discountStartDate: new Date(),
  id: "exampleId",
  isDiscounted: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    apparelDesc: "exampleApparelDesc",
    apparelName: "exampleApparelName",
    apparelPrice: 42.42,
    createdAt: new Date(),
    discountedPrice: 42.42,
    discountEndDate: new Date(),
    discountPercentage: 42.424242424,
    discountStartDate: new Date(),
    id: "exampleId",
    isDiscounted: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  apparelDesc: "exampleApparelDesc",
  apparelName: "exampleApparelName",
  apparelPrice: 42.42,
  createdAt: new Date(),
  discountedPrice: 42.42,
  discountEndDate: new Date(),
  discountPercentage: 42.424242424,
  discountStartDate: new Date(),
  id: "exampleId",
  isDiscounted: "true",
  updatedAt: new Date(),
};

const service = {
  createApparel() {
    return CREATE_RESULT;
  },
  apparels: () => FIND_MANY_RESULT,
  apparel: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Apparel", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApparelService,
          useValue: service,
        },
      ],
      controllers: [ApparelController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /apparels", async () => {
    await request(app.getHttpServer())
      .post("/apparels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discountEndDate: CREATE_RESULT.discountEndDate.toISOString(),
        discountStartDate: CREATE_RESULT.discountStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /apparels", async () => {
    await request(app.getHttpServer())
      .get("/apparels")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          discountEndDate: FIND_MANY_RESULT[0].discountEndDate.toISOString(),
          discountStartDate:
            FIND_MANY_RESULT[0].discountStartDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /apparels/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apparels"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /apparels/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apparels"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        discountEndDate: FIND_ONE_RESULT.discountEndDate.toISOString(),
        discountStartDate: FIND_ONE_RESULT.discountStartDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /apparels existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/apparels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discountEndDate: CREATE_RESULT.discountEndDate.toISOString(),
        discountStartDate: CREATE_RESULT.discountStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/apparels")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
