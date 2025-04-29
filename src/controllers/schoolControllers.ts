import { Request, Response } from 'express';
import { client } from '../lib/PrismaClient'

import { getNearBySchools } from '../lib/utils';

interface reqBody {
    name: string,
    address: string,
    latitude: number,
    longitude: number
}

interface resBody {
    message: string,
    school?: {
        id: number,
        Name: string,
        Address: string,
        latitude: number,
        longitude: number
    },
    nearBySchools?: Array<{
        id: number,
        Name: string,
        Address: string,
        latitude: number,
        longitude: number
    }>
}





export const addSchool = async (req: Request<{}, {}, reqBody>, res: Response<resBody>): Promise<void> => {
    try {
        const { name, address, latitude, longitude } = req.body

        if (!name || !address || !latitude || !longitude) {
            res.status(400).json({
                message: "Bad Request"
            })
            return
        }

        const schoolExists = await client.school.findFirst({
            where: {
                Name: name
            }
        });

        if (schoolExists) {
            res.status(409).json({
                message: "School with this name already exists"
            });
            return;
        }

        const newSchool = await client.school.create({
            data: {
                Name: name,
                Address: address,
                latitude,
                longitude
            }
        });

        res.status(201).json({
            message: "School Added Sucessfully",
            school: newSchool
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }


}

export const getSchools = async (req: Request<{}, {}, {}, { latitude: string, longitude: string }>, res: Response<resBody>) => {
    try {

        // const { userLot, userLon } = req.body;
        const latitude = parseFloat(req.query.latitude);
        const longitude = parseFloat(req.query.longitude);

        const schools = await getNearBySchools(latitude, longitude);
        if (schools.length == 0) {
            res.status(200).json({
                message: "No Schools Nearby"
            })
            return
        }

        res.status(200).json({
            message: "NearBy Schools",
            nearBySchools: schools
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }


}