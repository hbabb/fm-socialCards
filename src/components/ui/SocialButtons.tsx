import { Button } from "@/components/ui/button";
import { socialButtons } from "@/lib/socialButtons";

export function SocialButtons() {
    return (
        <div className="flex w-full flex-col gap-4">
            {socialButtons.map(({ title, icon: Icon, href }) => (
                <Button key={title} variant={"social"} asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {Icon && <Icon className="h-4 w-4" />}
                        {title}
                    </a>
                </Button>
            ))}
        </div>
    );
}
