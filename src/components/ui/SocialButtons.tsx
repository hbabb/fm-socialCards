import { Button } from "@/components/ui/button";
import { socialButtons } from "@/lib/socialButtons";

export function SocialButtons() {
    return (
        <div className="flex w-full flex-col gap-4">
            {socialButtons.map(({ title, icon: Icon, href }) => (
                <Button
                    key={title}
                    variant={"outline"}
                    className="focus-ring-2 focus:ring-c-green/50 dark:focus:ring-c-green/50 focus-visible:ring-c-green/50 flex min-h-11 w-full items-center justify-center gap-2 rounded-md border-none bg-c-gray-700 p-2 text-c-white transition duration-200 ease-in-out hover:scale-105 hover:bg-c-green hover:text-c-gray-900"
                    asChild
                >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {Icon && <Icon className="h-4 w-4" />}
                        {title}
                    </a>
                </Button>
            ))}
        </div>
    );
}
