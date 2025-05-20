"use client";
import { useState } from "react";
import { Paragraph, TypographyH3, TypographyMuted, Small, TypographyH4, TypographyH5 } from '@/custom/Typography';
import { Card } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQData = [
    {
        que: "Which land measurement units are used in North India?",
        ans: "Some of the popular land measurement units used in North India are Bigha, Biswa, Killa, Ghumaon, Biswansi, Kanal and many more."
    },
    {
        que: "Which land measurement units are used in East India?",
        ans: "In East India, people usually use Chatak, Dhur, Kattha, Lacha for land measurement purposes."
    },
    {
        que: "Which land measurement units are used in West India?",
        ans: "Bigha, Biswa, Biswansi are some of the commonly used land measurement units in West India."
    },
    {
        que: "Which land measurement units are used in Central India?",
        ans: "People mostly use Bigha and Kattha in Central India for measuring land parcels."
    },
    {
        que: "Which land measurement units are used in South India?",
        ans: "For land measurement purposes, people use Ankanam, Cent, Ground, Guntha, Kuncham, etc. in South India."
    },
]

const landCategories = [
    {
        title: "Commercial Lands",
        links: [
            "Commercial land for sale in Greater Noida",
            "Commercial land for sale in Faridabad",
            "Commercial land for sale in Navi Mumbai",
        ],
        moreText: "View 5 More"
    },
    {
        title: "Architecture Lands",
        links: [
            "Architecture land for sale in Greater Noida",
            "Architecture land for sale in Navi Mumbai",
            "Architecture land for sale in Chennai South",
        ],
        moreText: "View 5 More"
    },
    {
        title: "Industrial Lands",
        links: [
            "Industrial land for sale in Greater Noida",
            "Industrial land for sale in Navi Mumbai",
            "Industrial land for sale in Chennai South",
        ],
        moreText: "View 5 More"
    }
];

export default function AreaConverter() {
    const [selectedState, setSelectedState] = useState("");
    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const IndianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const unitMapping = {
        Maharashtra: ["guntha", "acre", "hectare", "square meter", "square feet"],
        UttarPradesh: ["bigha", "biswa", "acre", "square feet"],
        Bihar: ["katha", "dhur", "decimal", "acre"],
        Karnataka: ["gunta", "acre", "square feet", "square meter"],
        TamilNadu: ["cent", "acre", "ground", "square feet"],
        Punjab: ["marla", "kanal", "acre", "square feet"],
        Gujarat: ["vigha", "guntha", "acre", "square meter"],
        WestBengal: ["bigha", "katha", "chatak", "acre"],
        default: [
            "gaj", "cent", "bigha", "acre", "lessa", "katha", "square meter", "square yard", "biswa kacha",
            "ankanam", "square feet", "guntha", "dhur", "dismil", "killa", "marla", "square karam",
            "hectare", "ares", "decimal", "ground", "perch", "square inch", "kanal", "nali",
            "square mile", "gajam", "murabba", "square kilometer", "chatak", "square centimeter", "pura", "biswa"
        ]
    };

    const baseConversions = {
        "acre": 4046.86,
        "hectare": 10000,
        "square meter": 1,
        "square feet": 0.092903,
        "bigha": 2529,
        "katha": 126.44,
        "guntha": 101.17,
        "gaj": 0.836127,
        "gajam": 0.836127,
        "dhur": 16.93,
        "decimal": 40.4686,
        "biswa": 125,
        "biswa kacha": 150,
        "marla": 25.2929,
        "kanal": 505.857,
        "lessa": 40.4686,
        "cent": 40.4686,
        "square yard": 0.836127,
        "square inch": 0.00064516,
        "square mile": 2589988,
        "square kilometer": 1e6,
        "murabba": 25293,
        "square karam": 0.836127,
        "dismil": 40.4686,
        "killa": 4046.86,
        "nali": 202.34,
        "ground": 203,
        "ares": 100,
        "perch": 25.2929,
        "chatak": 45,
        "square centimeter": 0.0001,
        "pura": 25,
        "ankanam": 3.34
    };

    const getUnits = () => unitMapping[selectedState] || unitMapping["default"];

    const convertArea = (from, to, val) => {
        const fromVal = baseConversions[from];
        const toVal = baseConversions[to];
        if (!fromVal || !toVal || isNaN(val)) return null;

        const sqm = val * fromVal;
        return +(sqm / toVal).toFixed(4);
    };

    const handleConvert = () => {
        const val = parseFloat(value);
        const converted = convertArea(fromUnit, toUnit, val);
        setResult(converted !== null ? `${converted} ${toUnit}` : "Invalid conversion");
    };

    const swapUnits = () => {
        const temp = fromUnit;
        setFromUnit(toUnit);
        setToUnit(temp);
    };

    return (
        <>
            <div className="max-w-4xl mt-28 mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <Card className="p-8 rounded shadow-md">
                        <div>
                            <TypographyH3>Area Converter</TypographyH3>
                            <TypographyMuted className="text-sm">
                                Enter the value and select desired unit
                            </TypographyMuted>
                        </div>

                        <div className="grid gap-4">
                            <div className="flex flex-col gap-3">
                                <Label>State</Label>
                                <Select onValueChange={setSelectedState}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {IndianStates.map(state => (
                                            <SelectItem key={state} value={state}>{state}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Label>Area Value</Label>
                                <Input
                                    placeholder="Enter area"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    type="number"
                                />
                            </div>

                            <div className="flex gap-1 flex-col relative">
                                <div className="grid gap-2">
                                    <Label>From</Label>
                                    <Select value={fromUnit} onValueChange={setFromUnit}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="select unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {getUnits().map(unit => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex justify-center items-center absolute top-1/2 left-1/2">
                                    <Button size='sm' variant="outline" className="w-fit" onClick={swapUnits}>
                                        ⇅
                                    </Button>
                                </div>

                                <div className="grid gap-2">
                                    <Label>To</Label>
                                    <Select value={toUnit} onValueChange={setToUnit}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="select unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {getUnits().map(unit => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button className="bg-blue-800 hover:bg-blue-700 text-white" onClick={handleConvert}>Convert</Button>

                            {result && (
                                <Small className="text-lg font-medium mt-2">
                                    Result: <span className="text-blue-600">{result}</span>
                                </Small>
                            )}

                            <p className="text-xs text-muted-foreground italic">
                                *This tool is for informational purposes only
                            </p>
                        </div>
                    </Card>
                    <div>
                        <img loading="lazy" src="/assets/home-cal.gif" alt="home-cal" className="max-w-5xl" />
                    </div>
                </div>

                <>
                    <h4 className="scroll-m-20 mt-8 text-2xl font-semibold tracking-tight">
                        About Land Measurement Units
                    </h4>
                    <Paragraph>
                        Land measurement in India has always been done using various local and native measurement units such as Bigha, Ground, Kanal, etc, depending upon the state. These are locally set benchmarks, which have been in usage for a long time. These unit measurements vary greatly across regions, which is why converting them to international standard units, or globally accepted units, also known as SI units is of paramount importance. In addition, to understand the exact area of land as well as to calculate the value of land, converting local units into SI units, using a land area calculator, is advisable.
                    </Paragraph>

                    <Paragraph>
                        Some of the common land measurement units across India are hectares, acres, square meters, square yards. Other than this, Bigha, Marla, Cent, Guntha, Ground are regional units and their size varies from state to state.
                    </Paragraph>
                </>

                <>
                    <TypographyH4 className="mt-4">
                        Land area measurement units used in North India
                    </TypographyH4>
                    <Paragraph>
                        Bigha, Biswa, Biswansi, Killa, Ghumaon, Kanal are popular land area measurement units used in Haryana, Uttar Pradesh, Uttarakhand, Punjab, etc. To convert these local units into SI units, use the area conversion calculator.
                    </Paragraph>
                </>

                <>
                    <TypographyH4 className="mt-4">
                        Land area measurement units used in South India
                    </TypographyH4>
                    <Paragraph>
                        Ankanam, Cent, Ground, Guntha, Kuncham are popular land measurement units used in states such as Tamil Nadu, Andhra Pradesh, Kerala, Karnataka, etc. Convert these local units into globally accepted measurement units using the area calculator.
                    </Paragraph>
                </>

                <>
                    <TypographyH4 className="mt-4">
                        Land area measurement units used in East India
                    </TypographyH4>
                    <Paragraph>
                        Ankanam, Cent, Ground, Guntha, Kuncham are popular land measurement units used in states such as Tamil Nadu, Andhra Pradesh, Kerala, Karnataka, etc. Convert these local units into globally accepted measurement units using the area calculator.
                    </Paragraph>
                </>

                <>
                    <TypographyH4 className="mt-4">
                        Land area measurement units used in West India
                    </TypographyH4>
                    <Paragraph>
                        Chatak, Decimal, Dhur, Kattha, Lecha are popular land measurement units mostly used in West Bengal, Assam, Bihar, Tripura, Jharkhand, etc. For area conversion to other internationally recognized units, use the land area calculator.
                    </Paragraph>
                </>

            </div>

            <div className="w-full bg-[#fff5e4] py-12 px-4 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 max-w-4xl mx-auto">
                    <div className="w-full bg-card border shadow rounded-md p-6">
                        <TypographyH3 className="uppercase mb-4">
                            FAQS ON AREA MEASUREMENT UNITS
                        </TypographyH3>
                        {
                            FAQData?.map((faq) => (
                                <Accordion key={faq.que} type="single" collapsible >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger> {faq?.que}</AccordionTrigger>
                                        <AccordionContent>
                                            {faq?.ans}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }
                    </div>
                    <div>
                        <img loading="lazy" src="/assets/rentFAQ.png" alt="rentFAQ" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 my-10">

                <section className="grid gap-4">
                    <Small className="font-semibold opacity-65">
                        Explore on spaceswala
                    </Small>
                    <TypographyH3>
                        Lands in Popular Cities
                    </TypographyH3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {landCategories.map((category, index) => (
                            <div key={index}>
                                <TypographyH5 className="opacity-65 mb-2">
                                    {category.title}
                                </TypographyH5>
                                <div className="grid gap-2">
                                    {category.links.map((link, i) => (
                                        <TypographyMuted key={i} className="text-xs cursor-pointer hover:text-blue-600">
                                            {link}
                                        </TypographyMuted>
                                    ))}
                                    <li className="text-blue-700 text-xs cursor-pointer sm:mt-3">
                                        {category.moreText}
                                    </li>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
