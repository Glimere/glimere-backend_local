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
import { CardController } from "../card.controller";
import { CardService } from "../card.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cardholderName: "exampleCardholderName",
  cardNumber: 42,
  cardType: "exampleCardType",
  createdAt: new Date(),
  cvv: 42,
  expirationMonth: "exampleExpirationMonth",
  expirationYear: "exampleExpirationYear",
  id: "exampleId",
  isDefault: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cardholderName: "exampleCardholderName",
  cardNumber: 42,
  cardType: "exampleCardType",
  createdAt: new Date(),
  cvv: 42,
  expirationMonth: "exampleExpirationMonth",
  expirationYear: "exampleExpirationYear",
  id: "exampleId",
  isDefault: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cardholderName: "exampleCardholderName",
    cardNumber: 42,
    cardType: "exampleCardType",
    createdAt: new Date(),
    cvv: 42,
    expirationMonth: "exampleExpirationMonth",
    expirationYear: "exampleExpirationYear",
    id: "exampleId",
    isDefault: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cardholderName: "exampleCardholderName",
  cardNumber: 42,
  cardType: "exampleCardType",
  createdAt: new Date(),
  cvv: 42,
  expirationMonth: "exampleExpirationMonth",
  expirationYear: "exampleExpirationYear",
  id: "exampleId",
  isDefault: "true",
  updatedAt: new Date(),
};

const service = {
  createCard() {
    return CREATE_RESULT;
  },
  cards: () => FIND_MANY_RESULT,
  card: ({ where }: { where: { id: string } }) => {
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

describe("Card", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CardService,
          useValue: service,
        },
      ],
      controllers: [CardController],
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

  test("POST /cards", async () => {
    await request(app.getHttpServer())
      .post("/cards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cards", async () => {
    await request(app.getHttpServer())
      .get("/cards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cards")
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
