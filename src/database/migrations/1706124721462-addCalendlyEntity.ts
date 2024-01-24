import { MigrationInterface, QueryRunner } from "typeorm";

export class addCalendlyEntity1706124721462 implements MigrationInterface {
    name = 'addCalendlyEntity1706124721462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "calendly" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "calendly"`);
    }

}
