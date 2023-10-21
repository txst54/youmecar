class Rider {
    Rider(name, email, phone, orgList) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.orgList = orgList;
    }

    inOrg(org) {
        for(o in this.orgList) {
            if (o.equals(org)) {
                return true;
            } 
        }
        return false;
    }
}