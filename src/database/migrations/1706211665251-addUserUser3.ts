import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserUser31706211665251 implements MigrationInterface {
    name = 'addUserUser31706211665251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_076c63bcea93cbf36558312bf6c"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2"`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_076c63bcea93cbf36558312bf6c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2" FOREIGN KEY ("related_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2"`);
        await queryRunner.query(`ALTER TABLE "user_user" DROP CONSTRAINT "FK_076c63bcea93cbf36558312bf6c"`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_cf7fbe1e80e8ca81a4cd81702e2" FOREIGN KEY ("related_user_id") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_user" ADD CONSTRAINT "FK_076c63bcea93cbf36558312bf6c" FOREIGN KEY ("user_id") REFERENCES "user_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
