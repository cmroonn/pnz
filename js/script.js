document.addEventListener('DOMContentLoaded', () => {


    {
        const selectBlock = document.querySelectorAll('.select-block');
        const filters = document.querySelectorAll('.main__filter-block');



        selectBlock.forEach(elem => {
            elem.addEventListener('click', () => {
                selectBlock.forEach(el => {
                  el.classList.remove('selected');
                });
                elem.classList.add('selected');

                checkSelected(elem);
            });

            elem.addEventListener('mouseover',() => {
               elem.classList.add('hover');
            });

            elem.addEventListener('mouseout',() => {
                selectBlock.forEach(el => {
                    el.classList.remove('hover');
                });
            });

        });



        const checkSelected = item => {
            filters.forEach(filter => {

                filter.classList.remove('active');

                if ( item.getAttribute('data-select') === filter.id ) {
                    filter.classList.add('active');
                }
            });
        };
    }



    {

        const filterPoint = document.querySelectorAll('.block-fill');


        filterPoint.forEach(elem => {
            const target = elem.children[0];
            target.addEventListener('click', () => {

                if ( elem.classList.contains('opened') ){
                    elem.classList.remove('opened');


                } else {
                    filterPoint.forEach(el => {
                        el.classList.remove('opened');
                    });

                    elem.classList.add('opened');
                }

            });
        });
    }


    {

        const openFilter = document.querySelector('.open-filters');
        const filter = document.querySelector('.search-filter-wrapper');
        const closeFilter = document.querySelector('.closeFilter');
        const clearFilter = document.querySelector('.clearFilter');
        const selectedItems = document.querySelectorAll('.block-fill__list-checkbox input[type="checkbox"]');


        openFilter.addEventListener('click', e => {
           e.preventDefault();
           filter.classList.add('active');
        });

        closeFilter.addEventListener('click', e => {
            e.preventDefault();
            filter.classList.remove('active');
        });

        clearFilter.addEventListener('click', e => {
           e.preventDefault();

           selectedItems.forEach(elem => {
               elem.checked = false;

           });
        });

    }
});