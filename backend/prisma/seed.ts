import {database} from "../src/lib/Database";

class Seed {
    public async types() {
        await database.type.createMany({
            data: [
                { name: "Main Dish" },
                { name: "Side Dish" },
                { name: "Dessert" }
            ]
        });
    }

    public async menuItems() {

        // get type id for different types (main dishes, side dishes and desserts)
        const mainDishType = await database.type.findUnique({ where: { name: "Main Dish" } });
        const sideDishType = await database.type.findUnique({ where: { name: "Side Dish" } });
        const dessertType = await database.type.findUnique({ where: { name: "Dessert" } });

        await database.menuItem.createMany({
            data: [
                // main dishes
                { name: "Rice", price: 100, typeId: mainDishType.id },
                { name: "Rotty", price: 20, typeId: mainDishType.id },
                { name: "Noodles", price: 150, typeId: mainDishType.id },

                // side dishes
                { name: "Wadai", price: 45, typeId: sideDishType.id },
                { name: "Dhal Curry", price: 75, typeId: sideDishType.id },
                { name: "Fish Curry", price: 120, typeId: sideDishType.id },

                // desserts
                { name: "Watalappam", price: 40, typeId: dessertType.id },
                { name: "Jelly", price: 20, typeId: dessertType.id },
                { name: "Pudding", price: 25, typeId: dessertType.id },

            ]
        });
    }

    public async run() {
        try {
            await this.types();
            await this.menuItems();
            console.log("Seeding worked!!!");
        } catch (error) {
            console.error("Error seeding database:", error);
        } finally {
            await database.$disconnect();
        }
    }
}

new Seed().run();