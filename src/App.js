import { useState, useEffect } from "react";
import Accordion from "./component/Accordion";
import ProductImg from "./component/ProductImg";

const DATA = {
  id : "p1",
  name : "Galaxy S24 512GB Amber Yellow",
  manufacturer : "SAMSUNG",
  price : "$799",
  catalog : "/images/catalog.png"
}

export default function App(){
  // 장바구니 버튼 비활성화 관리
  const [addCart,addedCart] = useState(localStorage.getItem("cart"));
  // 탑 버튼 활성화 관리
  const [active, setActive] = useState(false);

  // 장바구니 추가 처리
  function addToCart(){
    alert("Added");
    // 버튼 비활성화
    addedCart(DATA.id);
    // 로컬스토리지 동기화
    localStorage.setItem("cart", DATA.id);
  };

  // 문서 탑으로 이동 처리
  function gotoTop() {
    window.scroll({top:0, behavior:'smooth'})
    // 또는 
    // document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    // 문서 타이틀 업데이트
    document.title = `Amazon - ${DATA.name}`;
    
    // 스크롤 이벤트 처리
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)

    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <div>
      <header className="border-b fixed top-0 left-0 right-0 z-10 w-full bg-white">
        {/* logo */}
        <div className="flex justify-center items-center h-12">
          <img
            className="w-20 h-6"
            src="/images/logo.png"
            alt="LOGO"
          />
        </div>
      </header>

      <main className="mt-16 max-w-md mx-auto px-4 pb-8">
        {/* 제품명*/}
        <p className="text-xs text-blue-400 font-semibold">
          {DATA.manufacturer}
        </p>
        <h3 className="mb-4 text-gray-800">{DATA.name}</h3>

        {/* ProductImg - 컴포넌트 */}
        <ProductImg />
      
        {/* 가격 */}
        <div className="text-4xl font-semibold my-8">
          {DATA.price}
        </div>

        {/* 버튼 */}
        <button
          className="w-full p-3 bg-yellow-400 font-semibold rounded-full disabled:opacity-50"
          type="button"
          onClick={addToCart}
          disabled={addCart}
        >
          Add To Cart
        </button>
        
        {/* 카탈로그 */}
        <h3 className="my-5 font-semibold">
          From the manufacturer
        </h3>
        <img
          src={DATA.catalog}
          alt="catalog"
        />

        {/* Accordion - 컴포넌트 */}
        <Accordion />

        {/* top버튼 */}
        <svg 
          className="fixed w-8 right-4 bottom-8 opacity-50"
          onClick={gotoTop}
          style={{ display: active ? "block" : "none" }}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
        </svg>

      </main>

    </div>
  )
};
