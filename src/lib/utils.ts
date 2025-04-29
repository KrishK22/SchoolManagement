import { client } from '../lib/PrismaClient'

const haversine = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;


    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}


export const getNearBySchools = async (userLat: number, userLon: number, radiusKm = 1) => {

    const schools = await client.school.findMany({
        select: {
            id: true,
            Name: true,
            Address: true,
            latitude: true,
            longitude: true
        }
    })

    const nearBy = schools.map(school => {
        const distance = haversine(userLat, userLon, school.latitude, school.longitude)
        return { ...school, distance }
    })
        // .filter(school => school.distance <= radiusKm)
        .sort((a, b) => a.distance - b.distance) 

    return nearBy;

}




export default haversine;


