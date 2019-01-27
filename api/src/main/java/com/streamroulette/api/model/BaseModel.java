package com.streamroulette.api.model;

import java.sql.Timestamp;

public class BaseModel {

    private long id;

    private Timestamp whenCreated;

    private Timestamp whenUpdated;

    public long getId () {
        return id;
    }

    public void setId (long id) {
        this.id = id;
    }

    public Timestamp getWhenCreated() {
        return whenCreated;
    }

    public void setWhenCreated(Timestamp whenCreated) {
        this.whenCreated = whenCreated;
    }

    public Timestamp getWhenUpdated() {
        return whenUpdated;
    }

    public void setWhenUpdated(Timestamp whenUpdated) {
        this.whenUpdated = whenUpdated;
    }
}
