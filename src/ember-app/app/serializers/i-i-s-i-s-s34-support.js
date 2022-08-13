import { Serializer as SupportSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s34-support';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SupportSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
