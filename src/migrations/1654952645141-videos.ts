import {MigrationInterface, QueryRunner} from "typeorm";

export class videos1654952645141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE videos (
                id INT NOT NULL AUTO_INCREMENT, 
                userId INT NOT NULL, 
                title TINYTEXT  NOT NULL, 
                description MEDIUMTEXT  NOT NULL, 
                src TINYTEXT  NOT NULL, 
                status TINYINT NOT NULL DEFAULT '1', 
                createdBy INT NULL, 
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
                updatedBy INT NULL, 
                updatedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NULL, 
                PRIMARY KEY (id),
                INDEX(userId),
                INDEX(title),
                INDEX(status),
                INDEX(createdBy),
                INDEX(createdAt),
                INDEX(updatedBy),
                INDEX(updatedAt)
            ) ENGINE = InnoDB;
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE videos `);
    }
}
