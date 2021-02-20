import { Request, Response } from "express";

export default function calculateHours (req: Request, res: Response) {

    try {

        if(!req.body.name || !req.body.startDate || !req.body.startHour || !req.body.endHour) {
            throw new Error("Todos os campos devem ser preenchidos!")
        }
        const start = new Date(req.body.startDate + "T" + req.body.startHour + ":00").getTime()
        const end = new Date(req.body.endDate + "T" + req.body.endHour + ":00").getTime()

        if(start >= end)  {
            throw new Error("A hora/data de saída deve ser depois da entrada!")
        } 
        

        const diff =  ((end - start) / 1000) / 3600

        if(diff > 24) {
            throw new Error("O horário máximo permitido é de 24h.")
        }

       res.status(200).send(`Olá ${req.body.name}, você trabalhou ${diff} horas no total.`)

       } catch(error) {
        res.status(400).send(error.message)
    }
}













// const start = req.body.startHour.split(":")
        // const end = req.body.endHour.split(":")

        // if(start[0] >= 5 && end[0] < 22 ) {

       
        // let min = end[1] - start[1]
        // let hour_carry = 0

        // if(min < 0) {
        //     min += 60
        //     hour_carry += 1
        // }
        // let hour = end[0] - start[0] - hour_carry
        // let diff = hour + ":" + min 