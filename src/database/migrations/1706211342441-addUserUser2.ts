import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserUser21706211342441 implements MigrationInterface {
    name = 'addUserUser21706211342441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_15e56ae6eb5322aec0d60643ec0"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_88aa523688d04f5ea26ddc48de6"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP COLUMN "investorId"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP COLUMN "candidateId"`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD "related_user_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_076c63bcea93cbf36558312bf6c" FOREIGN KEY ("user_id") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2" FOREIGN KEY ("related_user_id") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_076c63bcea93cbf36558312bf6c"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP COLUMN "related_user_id"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD "candidateId" integer`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD "investorId" integer`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_88aa523688d04f5ea26ddc48de6" FOREIGN KEY ("candidateId") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_15e56ae6eb5322aec0d60643ec0" FOREIGN KEY ("investorId") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
