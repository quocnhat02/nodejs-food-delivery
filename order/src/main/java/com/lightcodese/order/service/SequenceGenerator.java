package com.lightcodese.order.service;

import com.lightcodese.order.entity.Sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class SequenceGenerator {
    @Autowired
    private MongoOperations mongoOperations;

    public int generateNextOrderId() {
          Sequence counter = mongoOperations.findAndModify(
                Query.query(Criteria.where("_id").is("sequence")),
                new Update().inc("sequence", 1),
                FindAndModifyOptions.options().returnNew(true).upsert(true),
                Sequence.class
        );

        return counter != null ? counter.getSequence() : 1;
    }
}
