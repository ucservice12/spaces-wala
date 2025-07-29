import axios from "axios";
import { response } from "express";

export const fetchlocations = async (req, res) => {
    const { input, city } = req.query;
    console.log('input&city', input, city)
    const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;

    if (!input) return res.status(400).json({ error: "Missing input" });

    try {
        const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json`,
            {
                params: {
                    access_token: MAPBOX_API_KEY,
                    autocomplete: true,
                    types: 'place,locality,neighborhood,address',
                    proximity: 'ip',
                    limit: 10
                }
            }
        );

        console.log('response', response)
        const predictions = response.data.predictions || [];

        // Categorize results
        const cityMatches = [];
        const otherMatches = [];

        for (let p of predictions) {
            if (p.description.toLowerCase().includes(city?.toLowerCase())) {
                cityMatches.push(p.description);
            } else {
                otherMatches.push(p.description);
            }
        }

        res.json({ cityMatches, otherMatches });
    } catch (err) {
        console.error('err', err);
        res.status(500).json({ error: "Google Places API failed" });
    }
}