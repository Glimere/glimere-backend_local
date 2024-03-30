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
import { BrandController } from "../brand.controller";
import { BrandService } from "../brand.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  color: "exampleColor",
  country: "exampleCountry",
  createdAt: new Date(),
  desc: "exampleDesc",
  foundingdate: new Date(),
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  shortName: "exampleShortName",
  state: "exampleState",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  color: "exampleColor",
  country: "exampleCountry",
  createdAt: new Date(),
  desc: "exampleDesc",
  foundingdate: new Date(),
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  shortName: "exampleShortName",
  state: "exampleState",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    color: "exampleColor",
    country: "exampleCountry",
    createdAt: new Date(),
    desc: "exampleDesc",
    foundingdate: new Date(),
    id: "exampleId",
    logo: "exampleLogo",
    name: "exampleName",
    shortName: "exampleShortName",
    state: "exampleState",
    updatedAt: new Date(),
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  color: "exampleColor",
  country: "exampleCountry",
  createdAt: new Date(),
  desc: "exampleDesc",
  foundingdate: new Date(),
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  shortName: "exampleShortName",
  state: "exampleState",
  updatedAt: new Date(),
  website: "exampleWebsite",
};

const service = {
  createBrand() {
    return CREATE_RESULT;
  },
  brands: () => FIND_MANY_RESULT,
  brand: ({ where }: { where: { id: string } }) => {
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

describe("Brand", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BrandService,
          useValue: service,
        },
      ],
      controllers: [BrandController],
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

  test("POST /brands", async () => {
    await request(app.getHttpServer())
      .post("/brands")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        foundingdate: CREATE_RESULT.foundingdate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /brands", async () => {
    await request(app.getHttpServer())
      .get("/brands")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          foundingdate: FIND_MANY_RESULT[0].foundingdate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /brands/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/brands"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /brands/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/brands"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        foundingdate: FIND_ONE_RESULT.foundingdate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /brands existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/brands")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        foundingdate: CREATE_RESULT.foundingdate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/brands")
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
