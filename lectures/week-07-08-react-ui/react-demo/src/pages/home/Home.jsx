import { Card, CardContent } from '@/components/ui/card';

export const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-[400px] shadow-lg">
        <CardContent className="flex flex-col items-center py-8">
          {/* Logo Placeholder */}
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
            Co
          </div>
          {/* Headline */}
          <h1 className="text-2xl font-semibold mb-2">
            Welcome to our Company Portal
          </h1>
          {/* Tagline */}
          <p className="text-muted-foreground mb-4 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            dolores eius accusamus ipsam, quibusdam voluptas ut distinctio illum
            voluptate, quasi, laudantium nesciunt magni harum cum magnam
            excepturi sapiente earum eaque.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
