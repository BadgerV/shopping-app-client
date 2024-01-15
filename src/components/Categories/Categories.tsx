import Category from '../Category/Category';
import './categories.css';


import image1 from '/assets/image10.jpg';
import image2 from '/assets/image11.jpg';
import image3 from '/assets/image12.jpg';
import image4 from '/assets/image13.jpg';
import image5 from '/assets/image14.jpg';
import image6 from '/assets/image15.jpg';

const categoriesData = [
    {
        name : 'Accessories',
        desc : 'Get your phones, laptops and electronic appliances.',
        image : image1
    },
    {
        name : 'Clothings',
        desc : 'Get all sorts of dresses, wears and clothing materials.',
        image : image2
    },{
        name : 'Footwear',
        desc : 'Find your size, all sorts of assorted footwears',
        image : image3
    },{
        name : 'Head Gear',
        desc : 'Get hats, helmets, and all sorts of adornments for your head.',
        image : image4
    },{
        name : 'Perfumes',
        desc : 'Different types and flavour of perfumes that will make you feel like a super hero.',
        image : image5
    },{
        name : 'Edibles',
        desc : 'Get things you can eat, things that will satisfy your belly.',
        image : image6
    }
]

const Categories = () => {
  return (
    <div className='categories'>
        <span className="categories_header">Categories</span>
        <div className="categoriesContainer">
            {
                categoriesData.map((cat, index) => {
                    return(
                        <Category key = {index} {...cat}  />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Categories