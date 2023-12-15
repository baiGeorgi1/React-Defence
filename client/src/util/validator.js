

export const validData = (data) => {
    const token = data.target.name;
    const value = data.target.value;
    if (token)
        switch (token) {
            case 'name':
                if (value === '') {
                    throw new Error('Полето е празно!');
                } else if (value.length < 3) {
                    throw new Error('Името е твърде късо');
                }
                return value;

            case 'imageUrl':
                const patern = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
                if (value == '') {
                    throw new Error('Всички полета са задължителни!');
                } else if (!value.match(patern)) {
                    throw new Error('Неваллиден url адрес!');
                }

                break;
            case 'description':
                if (value === '') {
                    throw new Error('Моля опишете продукта!');
                }
                return value;
            default:
                break;
        }


};