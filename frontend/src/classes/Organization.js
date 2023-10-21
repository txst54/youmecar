class Organization {
    Organization (name, desc, access) {
        // name of org
        this.name = name;
        // description of org
        this.desc = desc;
        // public/private access
        this.access = access;
    }
    equals(org) {
        if (org instanceof Organization) {
            return this.name == org.name && this.desc == org.desc && this.access == org.access;
        }
        return false;
    }
}