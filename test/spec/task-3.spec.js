import chai from "chai";
import { EnhancedSet } from "../../src/task-3";

const assert = chai.assert;


describe("Task 3: Set new methods", () => {
    const set = new EnhancedSet([1, 2, "3", 4, 5, {}]);
    const otherSet = new Set([4, 51, "3", 3]);
    const otherSetEmpty = new Set();

    it("Should return a new set which contains elements of both sets", () => {
        assert.deepEqual(set.union(otherSet), new Set([1, 2, "3", 4, 5, {}, 51, 3]));
        assert.deepEqual(set.union(otherSetEmpty), new Set([1, 2, "3", 4, 5, {}]));
    });
    it("Should return a new set which contains elements that are present in both sets", () => {
        assert.deepEqual(set.intersection(otherSet), new Set(["3", 4]));
        assert.deepEqual(set.intersection(otherSetEmpty), new Set());
    });
    it("Should return a new set which contains elements that are present in this set not in an other", () => {
        assert.deepEqual(set.difference(otherSet), new Set([1, 2, 5, {}]));
        assert.deepEqual(set.difference(otherSetEmpty), new Set([1, 2, "3", 4, 5, {}]));
        assert.deepEqual(set.difference(set), new Set());
    });
    it("Should return a new set which contains elements that are not present in both sets", () => {
        assert.deepEqual(set.symmetricDifference(otherSet), new Set([1, 2, 5, {}, 51, 3]));
        assert.deepEqual(set.symmetricDifference(otherSetEmpty), new Set([1, 2, "3", 4, 5, {}]));
    });
    it("Should return true if this set contains an other set and false if it doesn't", () => {
        const otherSet2 = new Set(["3", 4, 5]);
        const otherSet3 = new Set([3, [4], 5]);
        assert.equal(set.isSuperset(otherSet2), true);
        assert.equal(set.isSuperset(otherSet3), false);
    });
    it("Should return true if an other set contains this set and false if it doesn't", () => {
        const set2 = new EnhancedSet([4, 5, "3"]);
        const otherSet2 = new Set([1, 2, "3", 4, 5, {}]);
        const otherSet3 = new Set([1, 2, "3", 4]);
        assert.equal(set2.isSubset(otherSet2), true);
        assert.equal(set2.isSubset(otherSet3), false);
    });

});
