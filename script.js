    const meals = [
        {
          name: "Spaghetti Bolognese",
          description: "Spaghetti with a tomato-based meat sauce",
          image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
          category: "Pasta",
          area: "Italian"
        },
        {
          name: "Chicken Teriyaki",
          description: "Grilled chicken with a sweet and savory teriyaki sauce",
          image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
          category: "Chicken",
          area: "Japanese"
        },
        {
          name: "Beef Wellington",
          description: "Tender beef fillet wrapped in pastry and baked until golden brown",
          image: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
          category: "Beef",
          area: "British"
        },
        {
          name: "Fish and Chips",
          description: "Battered and deep-fried fish served with chips",
          image: "https://www.themealdb.com/images/media/meals/ysqusw1468267688.jpg",
          category: "Seafood",
          area: "British"
        },
        {
          name: "Beef Stroganoff",
          description: "Tender strips of beef in a creamy mushroom sauce, served over rice or noodles",
          image: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
          category: "Beef",
          area: "Russian"
        },
        {
          name: "Pad Thai",
          description: "Stir-fried rice noodles with chicken, shrimp, tofu, and vegetables, topped with peanuts and herbs",
          image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
          category: "Noodles",
          area: "Thai"
        },
        {
          name: "Chicken Tikka Masala",
          description: "Grilled chicken in a creamy tomato-based sauce, seasoned with Indian spices",
          image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
          category: "Chicken",
          area: "Indian"
        },
        {
          name: "Roast Beef",
          description: "Slow-roasted beef served with roasted vegetables and gravy",
          image: "https://www.themealdb.com/images/media/meals/s52w2t1560465001.jpg",
          category: "Beef",
          area: "British"
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken cutlets topped with tomato sauce and melted mozzarella cheese",
          image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
          category: "Chicken",
          area: "Italian"
        },
        {
          name: "Lobster Bisque",
          description: "Creamy soup made with lobster, vegetables, and herbs",
          image: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
          category: "Seafood",
          area: "French"
        },
        {
          name: "Bangers and Mash",
          description: "Sausages and mashed potatoes, served with gravy",
          image: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
        },
        {
        name: "Peking Duck",
        description: "Roasted duck with crispy skin, served with pancakes and scallions",
        image: "https://www.themealdb.com/images/media/meals/xnzcq21504904026.jpg",
        category: "Duck",
        area: "Chinese"
        },
        {
        name: "Ratatouille",
        description: "Vegetable stew made with eggplant, tomatoes, and peppers",
        image: "https://www.themealdb.com/images/media/meals/wytyrl1511296896.jpg",
        category: "Vegetarian",
        area: "French"
        },
        {
        name: "Shepherd's Pie",
        description: "Ground beef or lamb, vegetables, and mashed potatoes, baked until golden brown",
        image: "https://www.themealdb.com/images/media/meals/w8cxqv1608831462.jpg",
        category: "Beef",
        area: "British"
        },
        {
        name: "Tacos al Pastor",
        description: "Marinated pork cooked on a spit, sliced thin and served in soft tortillas with pineapple and cilantro",
        image: "https://www.themealdb.com/images/media/meals/uryqru1511818636.jpg",
        category: "Pork",
        area: "Mexican"
        },
        {
        name: "Goulash",
        description: "Stew made with beef, onions, and paprika, served over egg noodles",
        image: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
        category: "Beef",
        area: "Hungarian"
        },
        {
        name: "Chicken Caesar Salad",
        description: "Grilled chicken on a bed of romaine lettuce, topped with croutons, Parmesan cheese, and Caesar dressing",
        image: "https://www.themealdb.com/images/media/meals/syqypv1468311589.jpg",
        category: "Salad",
        area: "American"
        },
        {
        name: "Sushi",
        description: "Assorted bite-sized pieces of raw fish and other seafood, served with rice and wasabi",
        image: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
        category: "Seafood",
        area: "Japanese"
        },
        {
        name: "Beef Bourguignon",
        description: "Stew made with beef, mushrooms, onions, and red wine, served over egg noodles",
        image: "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        category: "Beef",
        area: "French"
        },
        {
        name: "Moussaka",
        description: "Eggplant casserole with layers of ground beef, tomatoes, and potatoes, topped with a creamy bechamel sauce",
        image: "https://www.themealdb.com/images/media/meals/ctg8jd1614765472.jpg",
        category: "Beef",
        area: "Greek"
        },
        {
        name: "Shrimp Scampi",
        description: "Shrimp sauteed in butter, garlic, and white wine, served over pasta",
        image: "https://www.themealdb.com/images/media/meals/rhqqzx1468312893.jpg",
        category: "Seafood",
        area: "Italian"
        },
        {
        name: "Chili Con Carne",
        description: "Spicy stew made with groundbeef, tomatoes, beans, and chili peppers, served with rice or cornbread",
        image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
        category: "Beef",
        area: "American"
        },
        {
            name: "Chicken Teriyaki",
            description: "Grilled or pan-fried chicken coated in a sweet soy glaze, served with rice and vegetables",
            image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            category: "Chicken",
            area: "Japanese"
            },
            {
            name: "Fish and Chips",
            description: "Battered and fried fish with thick-cut french fries, served with tartar sauce and malt vinegar",
            image: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
            category: "Fish",
            area: "British"
            },
            {
            name: "Pho",
            description: "Vietnamese noodle soup made with beef or chicken broth, rice noodles, and various herbs and spices",
            image: "https://www.themealdb.com/images/media/meals/2y4d8j1593625121.jpg",
            category: "Beef",
            area: "Vietnamese"
            },
            {
            name: "Enchiladas",
            description: "Tortillas filled with meat, cheese, or vegetables, and covered in a spicy tomato or chili sauce",
            image: "https://www.themealdb.com/images/media/meals/ybfeia1583183334.jpg",
            category: "Mexican",
            area: "Mexican"
            },
            {
            name: "Beef Stroganoff",
            description: "Stew made with beef, mushrooms, and sour cream, served over egg noodles",
            image: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
            category: "Beef",
            area: "Russian"
            },
            {
            name: "Pesto Pasta",
            description: "Pasta tossed with basil pesto, Parmesan cheese, and pine nuts",
            image: "https://www.themealdb.com/images/media/meals/rtpvxu1511786352.jpg",
            category: "Pasta",
            area: "Italian"
            },
            {
            name: "Pad Thai",
            description: "Stir-fried rice noodles with shrimp or chicken, eggs, peanuts, and bean sprouts, seasoned with fish sauce and tamarind",
            image: "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
            category: "Chicken",
            area: "Thai"
            },
            {
            name: "Falafel",
            description: "Deep-fried balls made from ground chickpeas, served in pita bread with lettuce, tomato, and tahini sauce",
            image: "https://www.themealdb.com/images/media/meals/srqysz1487348892.jpg",
            category: "Vegetarian",
            area: "Middle Eastern"
            },
            {
            name: "Tikka Masala",
            description: "Spicy curry made with marinated chicken, cream, and a tomato-based sauce, served with rice or naan bread",
            image: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
            category: "Chicken",
            area: "Indian"
            },
            {
            name: "Bangers and Mash",
            description: "Sausagesserved with mashed potatoes and gravy",
            image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            category: "Pork",
            area: "British"
            },{
                name: "Goulash",
                description: "Stew made with beef, onions, paprika, and other seasonings, served with noodles or bread",
                image: "https://www.themealdb.com/images/media/meals/xxsyqy1511453673.jpg",
                category: "Beef",
                area: "Hungarian"
                },
                {
                name: "Chicken Parmesan",
                description: "Breaded chicken breast topped with tomato sauce and mozzarella cheese, baked until bubbly",
                image: "https://www.themealdb.com/images/media/meals/xnzmxa1560450139.jpg",
                category: "Chicken",
                area: "Italian"
                },
                {
                name: "Moussaka",
                description: "Greek casserole made with layers of eggplant, ground beef or lamb, and potatoes, topped with a creamy sauce",
                image: "https://www.themealdb.com/images/media/meals/xrvxpp1511464702.jpg",
                category: "Beef",
                area: "Greek"
                },
                {
                name: "Hummus and Pita",
                description: "Chickpea dip served with warm pita bread",
                image: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
                category: "Vegetarian",
                area: "Middle Eastern"
                },
                {
                name: "Biryani",
                description: "Spiced rice dish made with meat, vegetables, and aromatic spices, served with raita and papadum",
                image: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
                category: "Beef",
                area: "Indian"
                },
                {
                name: "Beef Brisket",
                description: "Slow-cooked beef brisket, seasoned with a dry rub or marinade, served with barbecue sauce and sides like coleslaw or baked beans",
                image: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
                category: "Beef",
                area: "American"
                },
                {
                name: "Ramen",
                description: "Japanese soup made with noodles, broth, and various toppings like pork, egg, and seaweed",
                image: "https://www.themealdb.com/images/media/meals/wprvrw1511884467.jpg",
                category: "Pork",
                area: "Japanese"
                },
                {
                name: "Lasagna",
                description: "Baked pasta dish made with layers of noodles, tomato sauce, cheese, and meat or vegetables",
                image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
                category: "Beef",
                area: "Italian"
                },
                {
                name: "Miso Soup",
                description: "Japanese soup made with miso paste, tofu, and various vegetables or seafood",
                image: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
                category: "Vegetarian",
                area: "Japanese"
                }            
       
    ];
    
    const mealsContainer = document.getElementById("mealsContainer");
    const searchInput = document.getElementById("searchInput");
    const noResultsContainer = document.getElementById("noResultsContainer");
    
    function displayMeals(meals) {
      mealsContainer.innerHTML = `<h2 style="font-weight:bold">Your Favorite Meals : </h2><br><hr>`;
      meals.forEach(meal => {
        mealsContainer.innerHTML += `
        <div class="col-md-4 animate__animated animate__fadeIn ">
          <div class="card border rounded border-dark border border-3 shadow-lg">
            <img src="${meal.image}" class="card-img-top" alt="${meal.name}">
            <div class="card-body">
              <h5 class="card-title">${meal.name}</h5>
              <hr>
              <p class="card-text">${meal.description}</p>
              <p class="card-text"><small class="text-muted">Category: ${meal.category} | Area: ${meal.area}</small></p>
            </div>
          </div>
          </div>
        `;
      });
    }
    
    function searchMeals(query) {
      const filteredMeals = meals.filter(meal => meal.name.toLowerCase().includes(query.toLowerCase()));
      if (filteredMeals.length === 0) {
        noResultsContainer.style.display = "block";
        mealsContainer.style.display = "none";
      } else {
        noResultsContainer.style.display = "none";
        mealsContainer.style.display = "flex";
        displayMeals(filteredMeals.slice(0, 10));
      }
    }
    
    searchInput.addEventListener("input", event => {
      const query = event.target.value.trim();
      searchMeals(query);
    });
 

    // Define an array of letters to choose from
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'y','q','w'];

// Generate a random index
let randomIndex = Math.floor(Math.random() * letters.length);

// If the randomly selected letter is one of the excluded letters, keep generating a new random index until it isn't
while (['j', 'q', 'v', 'w', 'x'].includes(letters[randomIndex])) {
  randomIndex = Math.floor(Math.random() * letters.length);
}

// Retrieve the random letter from the array
const randomLetter = letters[randomIndex];

   searchMeals(randomLetter);

   const btn = document.getElementById("mealBtn");
   btn.onclick = function() {
    var input = document.getElementById("searchMeal").value;
    searchMeals(input);
   }

      