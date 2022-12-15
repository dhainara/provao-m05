import { PartialType } from "@nestjs/swagger";
import { CreateTableDto } from "./create-table.dto";

export class PartialTableDto extends PartialType(CreateTableDto) {
    id: string;
}