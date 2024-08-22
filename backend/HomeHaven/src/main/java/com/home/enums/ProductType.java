package com.home.enums;

public enum ProductType {
    REFRIGERATOR(Category.HOME_APPLIANCES),
    WASHING_MACHINE(Category.HOME_APPLIANCES),
    LAMP(Category.HOME_APPLIANCES),
    OVEN(Category.HOME_APPLIANCES),
    GEYSER(Category.HOME_APPLIANCES),
    STUDY_TABLE(Category.FURNITURE),
    BED(Category.FURNITURE),
    SOFA(Category.FURNITURE),
    CHAIR(Category.FURNITURE),
    LIGHT(Category.FURNITURE);

    private final Category category;

    ProductType(Category category) {
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }
}