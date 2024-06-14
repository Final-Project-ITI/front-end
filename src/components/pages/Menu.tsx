import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { IMenuCategory } from "../../models/menuCategory.model";
import { IProduct } from "../../models/product.model";
import { IRestaurant } from "../../models/restaurant.model";
import About from "../shared/About";
import Category from "../shared/Category";
import Image from "../shared/Image";
import Section from "../shared/Section";

export const Menu = () => {
  const location = useLocation();

  const [menu, setMenu] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<IMenuCategory[]>([]);
  const [restaurantInfo, setRestaurantInfo] = useState<IRestaurant>({});

  const handleGetMenuItems = async () => {
    const res = await axios.get("/api/v1/products/" + location.state);
    setMenu(res.data);
  };
  const handleGetCategories = async () => {
    const res = await axios.get("/api/v1/categories/" + location.state);
    setCategories(res.data);
  };
  const handleGetRestauarntInfo = async () => {
    const res = await axios.get("/api/v1/restaurant/" + location.state);
    setRestaurantInfo(res.data);
  };

  useEffect(() => {
    handleGetMenuItems();
    handleGetCategories();
    handleGetRestauarntInfo();
  }, []);

  return (
    <>
      <Image restaurantInfo={restaurantInfo} />
      <About restaurantInfo={restaurantInfo} />
      <Section categories={categories} />
      {categories.map((category) => (
        <Category
          name={category.name}
          products={menu.filter(
            (item) => item.menuCategoryId._id === category._id
          )}
        />
      ))}
    </>
  );
};
