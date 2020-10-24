import EnhancedSet from '../../src/task-2';

describe('Task 2: Enhanced Set', () => {
  const set = new EnhancedSet([1, 2, '3', 4, 5, {}]);
  const set2 = new EnhancedSet([4, 51, '3', 3]);
  const emptySet = new EnhancedSet();


  describe('union', () => {
    it('should return new EnhancedSet object', () => {
      const result = set.union(set2);
      expect(set).not.toEqual(result);
      expect(result).toBeInstanceOf(EnhancedSet);
    });

    it('should contain same elements when combined with empty set', () => {
      expect(set.union(emptySet)).toEqual(set);
    });

    it('should contain same elements when empty set is combined with it', () => {
      expect(emptySet.union(set)).toEqual(set);
    });

    it('should return a new set which contains elements of both sets', () => {
      expect(set.union(set2)).toEqual(new EnhancedSet([1, 2, '3', 4, 5, {}, 51, 3]));
    });
  });

  describe('intersection', () => {
    it('should return new EnhancedSet object', () => {
      const result = set.intersection(set2);
      expect(set).not.toEqual(result);
      expect(result).toBeInstanceOf(EnhancedSet);
    });

    it('should return empty set if intersected with empty set', () => {
      expect(set.intersection(emptySet)).toEqual(emptySet);
      expect(emptySet.intersection(set)).toEqual(emptySet);
    });

    it('Should return a new set which contains only elements that are present in both sets', () => {
      expect(set.intersection(set2)).toEqual(new EnhancedSet(['3', 4]));
    });
  });

  describe('difference', () => {
    it('should return new EnhancedSet object', () => {
      const result = set.difference(set2);
      expect(set).not.toEqual(result);
      expect(result).toBeInstanceOf(EnhancedSet);
    });

    it('should return same set for diff with empty set', () => {
      expect(set.difference(emptySet)).toEqual(set);
    });

    it('should return empty set for diff between empty set and any other', () => {
      expect(emptySet.difference(set)).toEqual(emptySet);
      expect(emptySet.difference(emptySet)).toEqual(emptySet);
    });

    it('should return empty set for diff between a set and itself', () => {
      expect(set.difference(set)).toEqual(emptySet);
    });

    it('Should return a new set which contains elements that are present in this set not in an other', () => {
      expect(set.difference(set2)).toEqual(new EnhancedSet([1, 2, 5, {}]));
    });
  });

  describe('symmetricDifference', () => {
    it('should return new EnhancedSet object', () => {
      const result = set.symmetricDifference(set2);
      expect(set).not.toEqual(result);
      expect(result).toBeInstanceOf(EnhancedSet);
    });

    it('should return empty set for diff between set and itself', () => {
      expect(set.symmetricDifference(set)).toEqual(emptySet);
    });

    it('should return same set for diff with empty set', () => {
      expect(set.symmetricDifference(emptySet)).toEqual(set);
      expect(emptySet.symmetricDifference(set)).toEqual(set);
    });

    it('Should return a set which contains elements that are not present in both sets', () => {
      expect(set.symmetricDifference(set2)).toEqual(new EnhancedSet([1, 2, 5, {}, 51, 3]));
    });
  });

  describe('isSuperset', () => {
    it('should return true for empty set', () => {
      expect(set.isSuperset(emptySet)).toBe(true);
    });

    it('empty set is a superset of an empty set', () => {
      expect(emptySet.isSuperset(emptySet)).toBe(true);
    });

    it('set is a superset of itself', () => {
      expect(set.isSuperset(set)).toBe(true);
    });

    it('should return true if set contains other set', () => {
      expect(set.isSuperset(new EnhancedSet(['3', 4, 5]))).toBe(true);
    });

    it('should return false if set doesnt contain other set', () => {
      expect(set.isSuperset(set2)).toBe(false);
    });
  });

  describe('isSubset', () => {
    it('should return false for empty set', () => {
      expect(set.isSubset(emptySet)).toBe(false);
    });

    it('empty set is a subset of an empty set', () => {
      expect(emptySet.isSubset(emptySet)).toBe(true);
    });

    it('set is a subset of itself', () => {
      expect(set.isSubset(set)).toBe(true);
    });

    it('should return true if set is contained in other set', () => {
      expect(new EnhancedSet(['3', 4, 5]).isSubset(set)).toBe(true);
    });

    it('should return false if set isnt contained in other set', () => {
      expect(set.isSubset(set2)).toBe(false);
    });
  });

});
