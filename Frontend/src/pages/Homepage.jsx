import { useEffect } from "react";
import CategoryItem from "../components/Categoryitem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";



const categories = [
	{ href: "/CPU", name: "CPU", imageUrl: "/CPU.png" },
	{ href: "/Hard-Drive", name: "Hard-Drive", imageUrl: "/Hard Drive.jpg" },
	{ href: "/KeyBoard", name: "Keyboard", imageUrl: "/Keyboard.jpg" },
	{ href: "/Monitor", name: "Monitor", imageUrl: "/Monitor.png" },
	{ href: "/Printer", name: "Printer", imageUrl: "/Printer.png" },
	{ href: "/RAM", name: "RAM", imageUrl: "/RAM.jpg" },
	{ href: "/Mother-Board", name: "Mother Board", imageUrl: "/RAM.png" },
	{ href: "/Mouse", name: "Mouse", imageUrl: "/Mouse.jpg" },
	{ href: "/Pen-Drive", name: "Pen-Drive", imageUrl: "/Pen Drive.jpg" },
];

const Homepage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

    return(
        <div className='relative min-h-screen text-white overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
			    </h1>
                <p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest tech gadgets
				</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}

            </div>
        </div>
    )
};
export default Homepage