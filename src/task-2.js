

export default class EnhancedSet extends Set {

    union(s) {
        return new EnhancedSet([...this, ...s]);
    }

    intersection(s) {
        return new EnhancedSet([...this].filter(e => s.has(e)));
    }

    difference(s) {
        return new EnhancedSet([...this].filter(e => !s.has(e)));
    }

    symmetricDifference(s) {
        return new EnhancedSet([
            ...[...this].filter(e => !s.has(e)),
            ...[...s].filter(e => !this.has(e))
        ]);
    }

    isSuperset(s) {
        return [...s].reduce((p, e) => p && this.has(e), true);
    }

    isSubset(s) {
        return [...this].reduce((p, e) => p && s.has(e), true);
    }
}
