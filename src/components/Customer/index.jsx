import React from "react";

const List = ({ shops }) => {

    console.log(shops);

    const handleClick = (id) => {
        window.location.href = `https://shopend.netlify.app/customer/${id}`
        console.log("clicked")
    }

    return (
        <div className='p-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center'>
                {shops.map((shop) => {
                    return (
                        <div style={{ cursor: 'pointer' }} key={shop.shopID} onClick={() => { handleClick(shop.shopID) }} className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
                            <p>Shopname: {shop.shopID}</p>
                            <p>Shoptype: {shop.shopType}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Customer = () => {

    return (
        <div>
            <div className="mt-16">
                <List shops={shopsList} />
            </div>
        </div>
    );
};

export default Customer;


const shopsList = [
    {
        shopID: "shopNO1",
        shopImage: "",
        showOwner: "Shivam Soni",
        shopType: "Ammunition",
    },
    {
        shopID: "shopNO2",
        shopImage: "",
        showOwner: "Shivam Soni",
        shopType: "Ammunition",
    },
    {
        shopID: "The Hell's Shop",
        shopImage: "",
        showOwner: "King Crucio",
        shopType: "Demons for sale",
    },
    {
        shopID: "The Hell's Shop",
        shopImage: "",
        showOwner: "King Crucio",
        shopType: "Demons for sale",
    },
    {
        shopID: "The Hell's Shop",
        shopImage: "",
        showOwner: "King Crucio",
        shopType: "Demons for sale",
    },
]