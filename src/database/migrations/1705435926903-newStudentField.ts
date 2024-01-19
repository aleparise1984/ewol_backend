import { MigrationInterface, QueryRunner } from "typeorm";

export class newStudentField1705435926903 implements MigrationInterface {
    name = 'newStudentField1705435926903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "empleability" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "empleability"`);
    }

}
