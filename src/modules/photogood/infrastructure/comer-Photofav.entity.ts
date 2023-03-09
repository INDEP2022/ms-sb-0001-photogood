import {Column, Entity, PrimaryColumn} from "typeorm";
    @Entity("comer_fotofav", { schema: "comer" })
    export class ComerPhotofavEntity {
        
      @PrimaryColumn({
          type: 'numeric',
          name: 'id_evento',
          
          precision: 7
      })
      eventId: number;
      
      @PrimaryColumn({
          type: 'numeric',
          name: 'id_lote',
          
          precision: 10
      })
      batchId: number;
      
      @PrimaryColumn({
          type: 'numeric',
          name: 'no_bien',
          
          precision: 10
      })
      goodNumber: number;
      
      @Column({
          type: 'numeric',
          name: 'no_consec',
          
          precision: 3
      })
      consecNumber: number;
      
    }