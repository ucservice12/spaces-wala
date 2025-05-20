import { Paragraph, TypographyH1, TypographyH2, Small } from "@/custom/Typography";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'

export default function NotFound() {

    return (
        <div className="max-w-4xl mt-32 mb-16 sm:mt-48 sm:mb-26 mx-auto px-6">
            <div className="text-center flex justify-center items-cener flex-col gap-2">
                <TypographyH2 className="text-indigo-600">
                    404
                </TypographyH2>
                <TypographyH1>
                    Page not found
                </TypographyH1>
                <Paragraph>
                    Sorry, we couldn’t find the page you’re looking for.
                </Paragraph>
                <div className="flex justify-center items-center gap-4 mt-8">
                    <Link to='/'>
                        <Button className="bg-indigo-600 hover:bg-indigo-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Go back home
                        </Button>
                    </Link>
                    <Link to='/contact-us'>
                        <Small>
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Small>
                    </Link>
                </div>
            </div>
        </div>
    );
}
