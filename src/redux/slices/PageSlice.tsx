import { createSlice, current } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  value: ReportAzNews;
}

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  time: string;
  likes: number;
  dislikes: number;
  views: number;
}

export interface ReportAzNews {
  main: NewsItem[];
  latest: NewsItem[];
  politics: NewsItem[];
  economy: NewsItem[];
  society: NewsItem[];
  sports: NewsItem[];
  culture: NewsItem[];
  world: NewsItem[];
  analytics: NewsItem[];
  multimedia: NewsItem[];
}

const initialState: PageState = {
  value: {
    main: [
      {
        id: 1,
        category: "main",
        title: "Major Event Shakes the Nation",
        content:
          "A significant event unfolded, capturing the attention of the entire nation. This event had far-reaching implications, sparking discussions across various sectors and prompting reactions from key figures.",
        imageUrl: "https://example.com/main-image1.jpg",
        date: "December 17, 2023",
        time: "10:00 AM",
        likes: 150,
        dislikes: 10,
        views: 500,
      },
      {
        id: 2,
        category: "main",
        title: "Exclusive Interview with Renowned Personality",
        content:
          "Insights from an exclusive interview with a prominent figure in society. The interview delved into various aspects of the individual's life, achievements, and future plans, providing readers with a comprehensive understanding.",
        imageUrl: "https://example.com/main-image2.jpg",
        date: "December 16, 2023",
        time: "3:30 PM",
        likes: 120,
        dislikes: 5,
        views: 450,
      },
    ],
    latest: [
      {
        id: 3,
        category: "latest",
        title: "Top Stories of Today",
        content:
          "A roundup of the most important news stories from today. This comprehensive coverage includes updates on politics, economy, society, sports, culture, and more, ensuring readers stay informed on current affairs.",
        imageUrl: "https://example.com/latest-image1.jpg",
        date: "December 17, 2023",
        time: "5:45 PM",
        likes: 200,
        dislikes: 15,
        views: 600,
      },
      {
        id: 4,
        category: "laest",
        title: "Yesterday's Highlights",
        content:
          "Recap of key events and developments from yesterday. This detailed summary provides a chronological overview of significant occurrences, allowing readers to revisit important moments.",
        imageUrl: "https://example.com/latest-image2.jpg",
        date: "December 16, 2023",
        time: "8:15 AM",
        likes: 180,
        dislikes: 8,
        views: 550,
      },
      // Add more news items for other time periods
    ],
    politics: [
      {
        id: 5,
        category: "politics",
        title: "National Assembly Convenes for Important Session",
        content:
          "Members of the Milli Majlis gather to discuss crucial matters. The session addresses pressing issues facing the nation, with debates and decisions that shape the political landscape.",
        imageUrl: "https://example.com/politics-image1.jpg",
        date: "December 17, 2023",
        time: "1:30 PM",
        likes: 90,
        dislikes: 3,
        views: 400,
      },
      {
        id: 6,
        category: "politics",
        title: "Government Unveils New Domestic Policy Initiatives",
        content:
          "Details on the latest policy initiatives aimed at addressing domestic issues. The government introduces measures and strategies to enhance the well-being of citizens and address societal challenges.",
        imageUrl: "https://example.com/politics-image2.jpg",
        date: "December 16, 2023",
        time: "11:00 AM",
        likes: 100,
        dislikes: 5,
        views: 380,
      },
      // Add more news items for other political subcategories
    ],
    economy: [
      {
        id: 7,
        category: "economy",
        title: "Energy Sector Advances with New Technologies",
        content:
          "Breakthroughs in energy technologies promise a more sustainable future. The advancements contribute to environmental conservation and reshape the landscape of the energy sector.",
        imageUrl: "https://example.com/economy-image1.jpg",
        date: "December 15, 2023",
        time: "2:45 PM",
        likes: 120,
        dislikes: 8,
        views: 420,
      },
      {
        id: 8,
        category: "economy",
        title: "Finance Minister Announces Budget Highlights",
        content:
          "Key points from the latest budget announcement affecting the economy. The finance minister outlines fiscal policies, budget allocations, and economic forecasts for the upcoming year.",
        imageUrl: "https://example.com/economy-image2.jpg",
        date: "December 14, 2023",
        time: "10:30 AM",
        likes: 110,
        dislikes: 7,
        views: 400,
      },
      // Add more news items for other economic subcategories
    ],
    society: [
      {
        id: 9,
        category: "society",
        title: "Major Incident Under Investigation",
        content:
          "Authorities probe a significant incident that has raised concerns in society. Investigations are underway to determine the causes and consequences of the incident, addressing public safety and concerns.",
        imageUrl: "https://example.com/society-image1.jpg",
        date: "December 14, 2023",
        time: "4:15 PM",
        likes: 80,
        dislikes: 5,
        views: 350,
      },
      {
        id: 10,
        category: "society",
        title: "Advancements in Health Sciences",
        content:
          "Groundbreaking discoveries in health sciences promise better healthcare. Scientists and researchers achieve significant milestones in medical science, paving the way for improved treatments and well-being.",
        imageUrl: "https://example.com/society-image2.jpg",
        date: "December 13, 2023",
        time: "1:00 PM",
        likes: 95,
        dislikes: 3,
        views: 380,
      },
      // Add more news items for other society subcategories
    ],
    sports: [
      {
        id: 11,
        category: "sports",
        title: "Football Championship Heats Up",
        content:
          "Teams compete fiercely in the ongoing football championship. The tournament showcases intense matches, skillful performances, and passionate fan engagement as teams vie for the championship title.",
        imageUrl: "https://example.com/sports-image1.jpg",
        date: "December 13, 2023",
        time: "6:30 PM",
        likes: 150,
        dislikes: 10,
        views: 500,
      },
      {
        id: 12,
        category: "sports",
        title: "Individual Sports Stars Shine in Global Competitions",
        content:
          "Individual athletes achieve remarkable success in international competitions. The achievements of these sports stars reflect dedication, talent, and determination on the global stage.",
        imageUrl: "https://example.com/sports-image2.jpg",
        date: "December 12, 2023",
        time: "9:45 AM",
        likes: 130,
        dislikes: 8,
        views: 480,
      },
      // Add more news items for other sports subcategories
    ],
    culture: [
      {
        id: 13,
        category: "culture",
        title: "Cultural Policy Emphasizes Heritage Preservation",
        content:
          "Government initiatives focus on preserving and promoting cultural heritage. Policies and programs are implemented to safeguard cultural traditions, landmarks, and artistic expressions.",
        imageUrl: "https://example.com/culture-image1.jpg",
        date: "December 12, 2023",
        time: "3:00 PM",
        likes: 90,
        dislikes: 4,
        views: 400,
      },
      {
        id: 14,
        category: "culture",
        title: "Literary Festival Celebrates Diverse Voices",
        content:
          "Highlights from a literary festival that celebrates diversity in literature. Authors, poets, and literary enthusiasts come together to explore and appreciate a rich tapestry of voices and narratives.",
        imageUrl: "https://example.com/culture-image2.jpg",
        date: "December 11, 2023",
        time: "7:45 PM",
        likes: 110,
        dislikes: 6,
        views: 420,
      },
      // Add more news items for other culture subcategories
    ],
    world: [
      {
        id: 15,
        category: "world",
        title: "Regional Leaders Discuss Cooperation",
        content:
          "Leaders from neighboring regions engage in discussions to enhance cooperation. The talks focus on fostering diplomatic ties, addressing shared challenges, and exploring opportunities for collaboration.",
        imageUrl: "https://example.com/world-image1.jpg",
        date: "December 11, 2023",
        time: "11:30 AM",
        likes: 120,
        dislikes: 7,
        views: 450,
      },
      {
        id: 16,
        category: "world",
        title: "Exploring Interesting Stories from Around the Globe",
        content:
          "Discover intriguing stories from different countries that captivate readers. The stories cover a diverse range of topics, offering a global perspective on current events, culture, and human experiences.",
        imageUrl: "https://example.com/world-image2.jpg",
        date: "December 10, 2023",
        time: "4:00 PM",
        likes: 130,
        dislikes: 5,
        views: 500,
      },
      // Add more news items for other world subcategories
    ],
    analytics: [
      {
        id: 17,
        category: "analytics",
        title: "In-Depth Analysis of Current Trends",
        content:
          "Experts provide a detailed analysis of current trends shaping the world. The analysis covers various domains, including technology, geopolitics, and societal changes, offering insights into the forces driving global developments.",
        imageUrl: "https://example.com/analytics-image1.jpg",
        date: "December 15, 2023",
        time: "1:00 PM",
        likes: 140,
        dislikes: 6,
        views: 480,
      },
      {
        id: 18,
        category: "analytics",
        title: "Market Insights: Navigating Economic Challenges",
        content:
          "Insights from analysts on navigating economic challenges in the global market. The analysis includes strategies for businesses, investors, and policymakers to navigate economic uncertainties and capitalize on emerging opportunities.",
        imageUrl: "https://example.com/analytics-image2.jpg",
        date: "December 14, 2023",
        time: "10:00 AM",
        likes: 130,
        dislikes: 8,
        views: 460,
      },
      // Add more analytics articles
    ],
    multimedia: [
      {
        id: 19,
        category: "multimedia",
        title: "Photo Gallery: Cultural Festival Highlights",
        content:
          "Explore captivating moments from the city's cultural festival through stunning visuals. The photo gallery showcases the vibrancy, diversity, and cultural richness of the festival, offering a visual feast for readers.",
        imageUrl: "https://example.com/multimedia-image1.jpg",
        date: "December 14, 2023",
        time: "4:45 PM",
        likes: 90,
        dislikes: 3,
        views: 350,
      },
      {
        id: 20,
        category: "multimedia",
        title: "Video: Behind the Scenes of Sports Championships",
        content:
          "Get an exclusive behind-the-scenes look at the preparations and moments from sports championships. The video provides viewers with a unique perspective on the dedication, teamwork, and excitement behind major sporting events.",
        imageUrl: "https://example.com/multimedia-image2.jpg",
        date: "December 13, 2023",
        time: "2:30 PM",
        likes: 100,
        dislikes: 5,
        views: 380,
      },
      // Add more multimedia content
    ],
  },
};

export const PageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    like: (state, action) => {
      console.log(current(state.value));
      const category = action.payload.category;
      console.log(category);
      const items = current(state.value)[category];

      if (items) {
        const updatedItems = items.map((news) => {
          if (news.id === action.payload.id) {
            // Create a new object with the updated 'likes' property
            return { ...news, likes: news.likes + 1 };
          }
          return news;
        });

        // Create a new object with the updated items
        const updatedState = { ...state.value, [category]: updatedItems };

        console.log(action.payload.id);
        console.log("liked");
        console.log(updatedState);
        console.log(updatedState[category]);
        console.log(updatedState[category][0].likes); // Assuming there's only one item

        return { ...state, value: updatedState };
      }

      // Return the original state if category or items are not found
      return state;
    },

    dislike: (state, action) => {
      console.log(current(state.value));
      const category = action.payload.category;
      console.log(category);
      const items = current(state.value)[category];

      if (items) {
        const updatedItems = items.map((news) => {
          if (news.id === action.payload.id) {
            // Create a new object with the updated 'dislikes' property
            return { ...news, dislikes: news.dislikes + 1 };
          }
          return news;
        });

        // Create a new object with the updated items
        const updatedState = { ...state.value, [category]: updatedItems };

        return { ...state, value: updatedState };
      }

      // Return the original state if category or items are not found
      return state;
    },

    sort:(state,action)=> {
      console.log(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { like,dislike,sort } = PageSlice.actions;

export default PageSlice.reducer;
