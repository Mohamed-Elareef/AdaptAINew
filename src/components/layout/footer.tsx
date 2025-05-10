export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} AdaptAI Solutions. All rights reserved.</p>
        <p className="mt-1">Innovating with Adaptive Intelligence.</p>
      </div>
    </footer>
  );
}
