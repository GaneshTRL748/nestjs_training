import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedEntityPosts1692769095454 implements MigrationInterface {
    name = 'ModifiedEntityPosts1692769095454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "createdAt"`);
    }

}
