import React from 'react'

const Company_cards = ({ title, content, imageSrc }) => {
  const cards = [
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Product 1",
      content: "Description of Product",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "product 2",
      content: "Description of Product",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Product 3",
      content: "Description of Product",
    },

    // Add more cards as needed
  ];
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div
          className="px-1 mt-20 d-flex gap-5"
          style={{ justifyContent: "center" }}
        >
          {cards.map((d) => (
            <div
              className=""
              style={{
                backgroundColor: "rgb(280,227,340)",
                borderRadius: "20px",
                height: "450px",
                width: "350px",
              }}
            >
              <div className="">
                <img
                  src={d.img}
                  alt=""
                  style={{
                    width: "350px",
                    height: "300px",
                    // borderRadius: "20px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-4 p-4 
              product_details"
              >
                <h2 className="comp_card_h2">{d.title}</h2>
                <p className="comp_card_p2">{d.content}</p>
                <button className=" btn-dark text-white btn-lg px-4 py-2 rounded-xl">
                  Contact sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company_cards;
