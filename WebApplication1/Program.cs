namespace WebApplication1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            app.UseStaticFiles(); // Enables static file serving

            app.MapFallbackToFile("index.html"); // Default route fallback

            app.Run();
        }
    }
}
