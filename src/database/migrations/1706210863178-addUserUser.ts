import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserUser1706210863178 implements MigrationInterface {
    name = 'addUserUser1706210863178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "investorId" integer, "candidateId" integer, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_15e56ae6eb5322aec0d60643ec0" FOREIGN KEY ("investorId") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_88aa523688d04f5ea26ddc48de6" FOREIGN KEY ("candidateId") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_88aa523688d04f5ea26ddc48de6"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_15e56ae6eb5322aec0d60643ec0"`);
        await queryRunner.query(`DROP TABLE "user_user"`);
    }

}
