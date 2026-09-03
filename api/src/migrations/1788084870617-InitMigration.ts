import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1788084870617 implements MigrationInterface {
    name = 'InitMigration1788084870617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" SET DEFAULT gen_random_uuid()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`);
    }

}
