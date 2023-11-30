"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllTable1683053703974 = void 0;
class createAllTable1683053703974 {
    constructor() {
        this.name = 'createAllTable1683053703974';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('ewolAdmin', 'ewolUser', 'ewolStudent', 'ewolCandidate', 'ewolTutor', 'ewolInvestor')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "full_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, "isConfirmed" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."student_module_status_enum" AS ENUM('PENDING', 'APPROVED', 'REPROBATE')`);
        await queryRunner.query(`CREATE TABLE "student_module" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_url" character varying, "project_feedback" character varying, "status" "public"."student_module_status_enum" NOT NULL DEFAULT 'PENDING', "survey_response" character varying, "studentId" integer, "mooduleId" integer, CONSTRAINT "PK_7efe07f3f1e3f769fe7215bf8fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_class" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "assistence" boolean NOT NULL DEFAULT false, "like" boolean NOT NULL DEFAULT false, "studentId" integer, "class_id" integer, CONSTRAINT "PK_85874ee23f2927b59ff5f769f3c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "test_url" character varying, "test_result" boolean, "typeform_url" character varying, "typeform_result" boolean, "userId" integer, "bootcampId" integer, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bootcamp" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "name" character varying NOT NULL, "discord_url" character varying NOT NULL, "date_start" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, CONSTRAINT "UQ_a7d440d49a2d3598b3865fdc6b6" UNIQUE ("code"), CONSTRAINT "PK_0cef3174d99e8ba7ae7fea2ae01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "module_item" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "mooduleId" integer, CONSTRAINT "PK_56d0abd80fc8bac66772f8f8664" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "module" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "date_start" TIMESTAMP NOT NULL, "survey_url" character varying NOT NULL, "project_title" character varying, "project_description" character varying, "project_date_start" TIMESTAMP, "project_date_end" TIMESTAMP, "bootcampId" integer, CONSTRAINT "PK_0e20d657f968b051e674fbe3117" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "video_url" character varying NOT NULL, "pdf_url" character varying NOT NULL, "date_start" TIMESTAMP NOT NULL, "mooduleId" integer, CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student_module" ADD CONSTRAINT "FK_46a5ddc55aad06a400670b5788a" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_module" ADD CONSTRAINT "FK_5ac2b5e31db907b8dd71b97ac35" FOREIGN KEY ("mooduleId") REFERENCES "module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_class" ADD CONSTRAINT "FK_54d9dc074a5b2c5a75514e2223f" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_class" ADD CONSTRAINT "FK_3bd8bcc332c16601f9e644208dd" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_b35463776b4a11a3df3c30d920a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_43fa7b5afbc1924284126add895" FOREIGN KEY ("bootcampId") REFERENCES "bootcamp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "module_item" ADD CONSTRAINT "FK_0d778d765ed6915a7f1af99e7ad" FOREIGN KEY ("mooduleId") REFERENCES "module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "module" ADD CONSTRAINT "FK_1646e4e28acb412a48ce81033e2" FOREIGN KEY ("bootcampId") REFERENCES "bootcamp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "FK_34685f58d58eafe6f5ab1b59104" FOREIGN KEY ("mooduleId") REFERENCES "module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "FK_34685f58d58eafe6f5ab1b59104"`);
        await queryRunner.query(`ALTER TABLE "module" DROP CONSTRAINT "FK_1646e4e28acb412a48ce81033e2"`);
        await queryRunner.query(`ALTER TABLE "module_item" DROP CONSTRAINT "FK_0d778d765ed6915a7f1af99e7ad"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_43fa7b5afbc1924284126add895"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_b35463776b4a11a3df3c30d920a"`);
        await queryRunner.query(`ALTER TABLE "student_class" DROP CONSTRAINT "FK_3bd8bcc332c16601f9e644208dd"`);
        await queryRunner.query(`ALTER TABLE "student_class" DROP CONSTRAINT "FK_54d9dc074a5b2c5a75514e2223f"`);
        await queryRunner.query(`ALTER TABLE "student_module" DROP CONSTRAINT "FK_5ac2b5e31db907b8dd71b97ac35"`);
        await queryRunner.query(`ALTER TABLE "student_module" DROP CONSTRAINT "FK_46a5ddc55aad06a400670b5788a"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "module"`);
        await queryRunner.query(`DROP TABLE "module_item"`);
        await queryRunner.query(`DROP TABLE "bootcamp"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "student_class"`);
        await queryRunner.query(`DROP TABLE "student_module"`);
        await queryRunner.query(`DROP TYPE "public"."student_module_status_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }
}
exports.createAllTable1683053703974 = createAllTable1683053703974;
//# sourceMappingURL=1683053703974-createAllTable.js.map