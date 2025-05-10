import avatar from "@/assets/images/avatar-jessica.jpeg"; // todo: replace with MY avatar image
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SocialButtons } from "@/components/ui/SocialButtons";

function App() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-c-gray-900">
            <Card className="flex w-[327px] gap-6 rounded-xl border-none bg-c-gray-800">
                <CardHeader className="flex flex-col items-center gap-6">
                    <img
                        src={avatar}
                        alt="Avatar of Jessica"
                        className="size-[88px] rounded-full"
                    />
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-title text-foreground">Heath Babb</h2>
                        <h3 className="text-bold text-primary">Greenville, South Carolina</h3>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-center text-regular text-foreground">
                            Civil Designer <br /> Software Engineer <br /> Problem Solver
                        </h4>
                    </div>
                    <div className="w-full">
                        <SocialButtons />
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}

export default App;
