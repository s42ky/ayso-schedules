import Region from '../models/region';

let REGIONS: Region[] = [
    new Region(1, 49, "Stryker", "img/Fields049.svg", ""),
    new Region(2, 105, "Southview", "img/Fields105.svg", ""),
    new Region(4, 208, "West Wichita", "img/Fields105.svg", ""),
    new Region(5, 253, "Valley Center", "img/Fields105.svg", ""),
    new Region(6, 491, "Clearwater", "img/Fields105.svg", "")
];

let NULL_REGION: Region = new Region(0,0,"","","");

class RegionLookup {
    static getByNumber(regionNumber: Number) {
        for(let i = 0; i < REGIONS.length; ++i) {
            let region = REGIONS[i];
            if(region.number === regionNumber) {
                return region;
            }
        }
        return NULL_REGION;
    }

    static getById(id: Number) {
        for(let i = 0; i < REGIONS.length; ++i) {
            let region = REGIONS[i];
            if(region.id === id) {
                return region;
            }
        }
        return NULL_REGION;
    }
}

export { REGIONS as default, REGIONS, RegionLookup, Region };
