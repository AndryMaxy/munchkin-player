const Sex = Object.freeze({ Male: 'Male', Female: 'Female' });

export const selectOpposite = (sex) => {
    if (sex === Sex.Male) {
        return Sex.Female;
    }

    if (sex === Sex.Female) {
        return Sex.Male;
    }
};

export default Sex;
