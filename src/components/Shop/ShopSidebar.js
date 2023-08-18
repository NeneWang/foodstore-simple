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
          <div className="container">
            <div className="row">
              {[...Array(3)].map((_, divisionIndex) => (
                <div key={divisionIndex} className="col-3 col-md-12">
                  <ul>
                    {shop.CATEGORISE
                      .slice(
                        divisionIndex * Math.ceil(shop.CATEGORISE.length / 3),
                        (divisionIndex + 1) * Math.ceil(shop.CATEGORISE.length / 3)
                      )
                      .map((item, index) => (
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
              ))}
            </div>
          </div>


        </div>
        <div className="shop-sidebar__section -refine">

        </div>
      </div>
    </div>
  );
}
