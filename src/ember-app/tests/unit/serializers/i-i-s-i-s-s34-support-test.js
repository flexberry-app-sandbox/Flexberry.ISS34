import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s34-support', 'Unit | Serializer | i-i-s-i-s-s34-support', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-s-s34-support',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-i-s-s34-form',
    'model:i-i-s-i-s-s34-investment',
    'model:i-i-s-i-s-s34-list-inv',
    'model:i-i-s-i-s-s34-list-size',
    'model:i-i-s-i-s-s34-size',
    'model:i-i-s-i-s-s34-support',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
