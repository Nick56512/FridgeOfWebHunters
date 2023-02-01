namespace FridgeOfWebHunter.Models
{
    public class IngredientRecipe
    {
        public int Id { get; set; } 
        public Ingredient Ingredient { get; set; }

        public Recipe Recipe { get; set; }
        public int Quantity { get; set; }
        public double Weight { get; set; }
    }
}
