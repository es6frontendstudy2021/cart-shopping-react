import React, { useState, useRef, useEffect } from "react";

const infinityPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataList, setDataList] = useState([
    { name: "기린", id: 0 },
    { name: "강아지", id: 1 },
    { name: "토끼", id: 2 },
    { name: "호랑이", id: 3 },
    { name: "사자", id: 4 },
  ]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const viewport = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const target = useRef(null);

  const loadItems = () => {
    setDataList((prevState) => {
      const animals = [
        { name: "고양이" },
        { name: "코끼리" },
        { name: "원숭이" },
        { name: "고라니" },
        { name: "기린" },
        { name: "표범" },
      ];
      const id = prevState[prevState.length - 1].id;
      const animalId = animals.map((animal, index) => {
        return { ...animal, id: id + index + 1 };
      });
      return [...prevState, ...animalId];
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const options = {
      root: viewport.current,
      threshold: 1,
    };

    const handleIntersection = (entires, observer) => {
      entires.forEach((entry) => {
        // console.log(entry);

        if (!entry.isIntersecting) {
          return;
        }
        loadItems();
        console.log(observer);
        observer.unobserve(entry.target);
        observer.observe(target.current);
      });
    };
    const io = new IntersectionObserver(handleIntersection, options);
    if (target.current) {
      io.observe(target.current); // target
    }
    return () => io && io.disconnect();
  }, [target, viewport]);

  return (
    <div className="wrapper">
      <section className="card-grid" id="" ref={viewport}>
        {dataList.map((animal, index) => {
          const lastEl = index === dataList.length - 1;
          return (
            <div
              key={index}
              className={`card ${lastEl && "last"}`}
              ref={lastEl ? target : null}
            >
              <p>아이디: {animal.id}</p>
              <p>이름:{animal.name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default infinityPage;
