
import PropTypes from 'prop-types';

const CategoryCard = ({category}) => {
    const {category_name,availability,logo}=category;
    return (
        <div className='p-9 bg-slate-100'>
            <img className='w-16 h-16 mb-5' src={logo} alt="" />
            <h2 className='text-lg text-gray-600 font-semibold'>{category_name}</h2>
            <p className=' text-gray-500'>{availability}</p>
        
        </div>
    );
};

export default CategoryCard;
CategoryCard.propTypes = {
    category: PropTypes.object.isRequired,
        
};