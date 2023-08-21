import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import classNames from "classnames";

import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";
import { shop } from "../../common/variables";
import { formatCurrency } from "../../common/utils";
import {
  setFilterCategory,
  setFilterBrand,
  setFilterPriceRange,
  resetFilter,
} from "../../redux/actions/shopActions";

export default function ShopSidebar() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.shopReducers.filter);
  useEffect(() => {
    dispatch(resetFilter());
  }, []);
  return (
    <div className="shop-sidebar">
      <div className="shop-sidebar__content">
        <div className="shop-sidebar__section -categories">
          <SectionTitleOne className="-medium" spaceBottom={30 / 16 + "em"}>
            Categorias
          </SectionTitleOne>
          <ul>
            {shop.CATEGORISE.map((item, index) => (
              <li
                key={index}
                className={classNames({
                  active: item === filterData.category,
                })}
              >
                <Link href={process.env.PUBLIC_URL + "#"} key={index}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setFilterCategory(item));
                    }}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="shop-sidebar__section -refine">
         
        </div>
      </div>
    </div>
  );
}
